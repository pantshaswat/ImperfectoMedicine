/**
* This configuration file lets you run `$ sanity [command]` in this folder
* Go to https://www.sanity.io/docs/cli to learn more.
**/
import { defineCliConfig } from 'sanity/cli'

// SANITY_STUDIO_PROJECT_ID
// NEXT_PUBLIC_SANITY_PROJECT_ID
const projectId = process.env.SANITY_STUDIO_PROJECT_ID

// SANITY_STUDIO_DATASET
// NEXT_PUBLIC_SANITY_DATASET
const dataset = process.env.SANITY_STUDIO_DATASET      

export default defineCliConfig({ api: { projectId, dataset } })
