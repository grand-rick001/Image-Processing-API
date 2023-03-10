import express, { Request, Response } from 'express';
import resizeImage from '../utilities/resize';
import fs from 'fs';
import path from 'path';
import { rootDir } from '../../index';

const convert = express.Router();

convert.get('/', async (req: Request, res: Response) => {
	let inputFileName = req.query.fileName as unknown as string;
	const width = req.query.width as unknown as string;
	const height = req.query.height as unknown as string;

	if (inputFileName.slice(-4) === '.jpg') {
		inputFileName = inputFileName.slice(0, -4);
	}

	const inputFile = path.join(
		rootDir,
		'assets',
		'images',
		`${inputFileName}.jpg`
	);
	const outputFileName = `${inputFileName}_${width}_${height}`;
	const outputFile = path.join(
		rootDir,
		'assets',
		'thumbs',
		`${outputFileName}.jpg`
	);

	if (!fs.existsSync(inputFile)) {
		res.send('The image does not exist');
	} else if (fs.existsSync(outputFile)) {
		res.sendFile(`${outputFile}`);
	} else {
		await resizeImage(inputFile, width, height, outputFile);
		res.sendFile(`${outputFile}`);
	}
});

export default convert;
