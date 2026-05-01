import express from 'express'
import { beansService } from '#services/beansService';
import { dataTypes, type BeanPath, type beanType } from '#types/index';
import { create } from 'node:domain';
import { createData } from '#modules/utils';

export const beansRouter = express.Router();

beansRouter.get('/', async (req, res) => {

    const type = req.query.type as string | undefined;
    const allBeans = await beansService.getBeans();

    if (allBeans.type === dataTypes.ERROR) {
        return res.status(400).json(allBeans);
    }
    let beans = allBeans.data as beanType[];

    if (type) {
        beans = beans.filter(bean =>
            bean.details.process.toLowerCase() === type.toLowerCase()
        );
    }
    const parsed = beansService.parseBeans(beans);
    return res.status(200).json(
        createData(dataTypes.SUCCESS, parsed)
    );
});

beansRouter.get('/:id', async (req, res) => {
    const id = req.params.id;
    const response = await beansService.getBeans();

    if(response.type === dataTypes.ERROR) {
        return res.status(400).json(response);
    }
    const bean = (response.data as beanType[]).find(item => item.id === id);

    if(bean){
        return res.status(200).json(createData(dataTypes.SUCCESS, bean));
    } else {
        return res.status(404).json(createData(dataTypes.ERROR, `Bean with id - ${id} not found`));
    }
});

beansRouter.post('/', async (req, res) => {
    const body = req.body as beanType;
    const validationResult = beansService.checkBeansData(body);
    if(validationResult.type === dataTypes.ERROR) {
        return res.status(400).json(validationResult);
    }
    const newBean = beansService.addRecipesAndId(body);
    const response = await beansService.createBeanFile(newBean);
    console.log(response);
    if(response.type === dataTypes.SUCCESS){
        return res.status(200).json(createData(dataTypes.SUCCESS, newBean));
    } else {
        return res.status(404).json(createData(dataTypes.ERROR, `Failed to create bean file`));
    }
});

beansRouter.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const response = await beansService.getBeans(true);

    if(response.type === dataTypes.ERROR) {
        res.status(400).json(response);
        return;
    }
    const removeResponse = await beansService.removeBean(response.data as BeanPath[], id);
    const statusCode = removeResponse?.type === dataTypes.ERROR ? 400 : 200;
    console.log('File deleted', statusCode)
    res.status(statusCode).json(removeResponse);
});

beansRouter.put('/:id', async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const response = await beansService.getBeans(true);

    if(response.type === dataTypes.ERROR) {
        res.status(400).json(response);
        return;
    }
    const updatedResponse = await beansService.updateBean(response.data as BeanPath[], id, body);
    const statusCode = updatedResponse?.type === dataTypes.ERROR ? 400 : 200;
    res.status(statusCode).json(updatedResponse);
});

