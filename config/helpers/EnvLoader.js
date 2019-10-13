'use strict';


const dotenv = require("dotenv");
const fs = require('fs');
const path = require('path');
const {config} = dotenv;
const rootPath = require('app-root-path'); // no declaration file


/***
 * Load env settings
 */
const  requiredEnvDirectories =  ["development", "test", "production"];

class Loader {
   

    constructor() {

        this.ENV = process.env.NODE_ENV;
        if(!this.ENV) {
            throw new Error(
                'The NODE_ENV environment variable is required but was not specified.'
            );
        }

        this.rootPath =  rootPath.path.toString();
        this.rootDir = path.join(this.rootPath, "./settings");
        this.srcDir = path.join(this.rootPath, "settings", this.ENV);

        // test existing dir structure
        this.testIfEnvDirExist();

        // test if env targer dir exists
        this.testIfEnvtargetDirExists();

        // parse env definitions form this folder
        this.parseEnvDefinitions();

        
     }

    /***
     * Test if default required directories exist
     */
    testIfEnvDirExist() {
        requiredEnvDirectories.map ( ($dir) => {
            const $srcDir = path.join (`${this.rootDir}/${$dir}`);
            if(!fs.existsSync($srcDir)) {
                console.log(`The default env directory ${$srcDir} does not exist`);
                process.exit(1);
            }
        })
     }

    /***
     *
     */
    testIfEnvtargetDirExists() {
       if(!fs.existsSync(this.srcDir)) {
            console.log(`The target directory for this environment ${this.srcDir} does not exist`);
            process.exit(1);
        }
    }

    /***
     * Collect settings fromthis folder
     */ 
    parseEnvDefinitions() {
    
        let err;
        let files;


        try {
              
            const dirContent = fs.readdirSync(this.srcDir);
            files = dirContent.filter((file) => {               
                return file.match(/.*\.rd\./gi);
            });         
        
            // Parse file intro process env environment
            files.forEach((file) => {
                const pathToFile = path.join(this.srcDir, file);
                if (fs.existsSync(pathToFile)) {
                    dotenv.config({ path: pathToFile });
                }
            });         

        } catch (e) {
            err = e;
        } finally {
            // Critical Error    
            if (err) {
                console.error('Critical Error: could not load environmental files ', err.message);
                process.exit(1);
            // Return to caller        
            } else {
                return;
            }
        }

    }
}

module.exports = new Loader();
