import express from 'express'
import { languageService } from '#services/languageService';
import { dataTypes } from '#types/index';

export const languageRouter = express.Router()

languageRouter.get('/:language', async (req, res) => {

   const curLang = req.params.language;

   let response = await languageService.getLanguageFile(curLang);

   if (response.type === dataTypes.ERROR) {
      response = await languageService.getLanguageFile('en');
   }

   const parseResponse = await languageService.parseXliffFile(response.data as string);
   if (parseResponse.type === dataTypes.ERROR) {
      res.status(400).json(parseResponse);
      return;
   }  

   res.status(200).json(parseResponse);
});