import { getPath} from '#modules/filePath'
import { createData} from '#modules/utils';
import fsPromises from 'fs/promises'
import { create } from 'node:domain';
import path from 'node:path'
import { promisify } from 'node:util';
import { dataTypes } from '#types/index';
// @ts-ignore-next-line
import xliff from 'xliff';
    
async function getLanguageFile(language: string) {
    const fullPath = getPath(path.join('data', 'locales', `${language}.xlf`))

    try {
        const result = await fsPromises.readFile(fullPath, 'utf8');
        return createData(dataTypes.SUCCESS, result);
    } catch (error) {
        return createData(dataTypes.ERROR, (error as {message: string})?.message || 'File not found');
    }
}

async function parseXliffFile(filePath: string) {
    const xliff2js = promisify(xliff.xliff2js);
    try {
        let parsedXliff = await xliff2js(filePath);

        if(parsedXliff){
            parsedXliff = parsedXliff?.resources?.f1;
        }
        return createData(dataTypes.SUCCESS, parsedXliff);
    } catch (error) {
        return createData(dataTypes.ERROR, (error as {message: string})?.message || 'Could not parse Xliff file');
    }
}

export const languageService = {
    getLanguageFile,
    parseXliffFile
}
