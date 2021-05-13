/* ***************************************************************** */
/*                                                                   */
/* IBM Confidential                                                  */
/*                                                                   */
/* OCO Source Materials                                              */
/* © Copyright IBM Corp. 2020                                        */
/*                                                                   */
/* The source code for this program is not published or otherwise    */
/* divested of its trade secrets, irrespective of what has been      */
/* deposited with the U.S. Copyright Office.                         */
/*                                                                   */
/* ***************************************************************** */

import express, { Express } from 'express';
import * as mainController from './controllers/mainController';
/**
 * Express configuration
 */
const app: Express = express();
export const getPort = (port: string): string => port || '3000';

app.set('port', getPort(process.env.PORT));
app.use(express.json());

/**
 * API app routes.
 */
app.get(
  '/getSlots',
  mainController.getSlots
);
app.get(
  '/',
  async (req,res)=>res.send("App running")
);

export default app;
