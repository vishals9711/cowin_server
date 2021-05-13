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

import errorHandler from 'errorhandler';
import http, { Server } from 'http';

/**
 * Initialize environment configuration
 */
import app from './app';


/**
 * Error Handler. Provides full stack - remove for production
 */
app.use(errorHandler());

/**
 * Creating server based on protocol.
 */
const server: Server = http.createServer(app);

server.listen(app.get('port'), () => {
  console.log(
    '\tApp is running at http://localhost:%d in %s mode',
    app.get('port'),
    app.get('env')
  );
  console.log('\tPress CTRL-C to stop\n');
});

export default server;
