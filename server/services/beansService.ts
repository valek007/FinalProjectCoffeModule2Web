import { getPath } from '#modules/filePath'
import { createData, createFile, readDir, removeFile } from '#modules/utils';
import { dataTypes, type BeanPath, type beanType, type SmallBeanType } from '#types/index';
import fsPromises from 'fs/promises'
import { v4 as uuidv4 } from 'uuid';
import { create } from 'node:domain';
import path from 'node:path'
import { title } from 'node:process';
import { promisify } from 'node:util';
import { DefaultRecipes } from '../constants/index.ts';


async function getBeans(withPath = false) {

    const response = await readDir(path.join('data', 'beans'));
    const allBeans: beanType[] = [];
    const allBeansWithPath: BeanPath[] = [];

    if (response.type === dataTypes.ERROR) {
        return response;
    }
    try {
        for (const path of response.data) {
            const bean = await fsPromises.readFile(path, 'utf-8');
            const parsedBean = JSON.parse(bean) as beanType;

            if(withPath) {
                allBeansWithPath.push({
                    bean: parsedBean,
                    path: path
                });
            }else{
                allBeans.push(parsedBean);
            }    
        }
        return createData(dataTypes.SUCCESS, withPath ? allBeansWithPath : allBeans);
    } catch (err) {
        return createData(dataTypes.ERROR, (err as { message: string })?.message || 'Failed to read some bean file');
    }
}

function filterBeansByProcess(beans: beanType[], process?: string) {
    if (!process) return beans;

    return beans.filter(bean =>
        bean.details.process.toLowerCase() === process.toLowerCase()
    );
}

function parseBeans(beansArr: beanType[]):SmallBeanType[] {
    return beansArr.map(bean => ({
        id: bean.id,
        title: bean.title,
        description: bean.description,
        imageUrl: bean.imageUrl
    }));
}

function checkBeansData(bean: beanType) {
    if(!bean.title){
        return createData(dataTypes.ERROR, 'Add required fields: title');
    }
    if(!bean.country){
        return createData(dataTypes.ERROR, 'Add required fields: country');
    }
    return createData(dataTypes.SUCCESS, 'All required fields are correct');
}

function addRecipesAndId(bean: beanType) {
    if(!bean.recipes || bean.recipes?.length === 0) {
        bean.recipes = DefaultRecipes;
    }
    bean.id = uuidv4();
    return bean;
}

async function createBeanFile(bean: beanType) {
    const fileName = `${bean.details.region}-${bean.details.process.toLowerCase()}`;
    const response = await createFile(path.join('data','beans',`${fileName}.json`), JSON.stringify(bean, null, 2), true);
    
    if(response.type === dataTypes.SUCCESS) {
        return createData(dataTypes.SUCCESS, {id: bean.id});
    }
    return response; 
}

async function removeBean(beansArr: BeanPath[], id: string) {
    const bean = beansArr.find(item => item.bean.id === id);

    if(!bean) return createData(dataTypes.ERROR, `Bean with id - ${id} not found`);

    try{
        await fsPromises.unlink(bean.path);
        return createData(dataTypes.SUCCESS, `Bean with id - ${id} removed successfully`);
    }catch(err){
        return createData(dataTypes.ERROR, (err as { message: string })?.message || 'Failed to remove bean file');
    }
}

async function updateBean(beansArr: BeanPath[], id: string, updatedBean: beanType) {
    const oldBean = beansArr.find(item => item.bean.id === id);

    if(!oldBean) return createData(dataTypes.ERROR, `Bean with id - ${id} not found`);

    const recipes = oldBean.bean.recipes;
    const pathToFile = oldBean.path;

    const newBean = {
        ...updatedBean,
        recipes,
        id
    }
    const response = await createFile(pathToFile, JSON.stringify(newBean, null, 2), true);
    
    if(response.type === dataTypes.SUCCESS) {
        return createData(dataTypes.SUCCESS, 'Bean updated successfully');
    }
    return response; 
}

export const beansService = {
    getBeans,
    parseBeans,
    checkBeansData,
    addRecipesAndId,
    createBeanFile,
    removeBean,
    updateBean,
    filterBeansByProcess
}
