import express from 'express'
import { beansService } from '#services/beansService';
import { dataTypes, type beanType } from '#types/index';
import { create } from 'node:domain';
import { createData } from '#modules/utils';

export const beansRouter = express.Router();

beansRouter.get('/', async (req, res) => {

    const allBeans = await beansService.getBeans();
    const statusCode = allBeans.type === dataTypes.ERROR ? 400 : 200;
    const parsedResponse = beansService.parseBeans(allBeans.data as beanType[]);
    res.status(statusCode).json(createData(dataTypes.SUCCESS, parsedResponse));
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