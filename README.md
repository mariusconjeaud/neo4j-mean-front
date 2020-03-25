# Neo4j MEAN app - remote version
The simplest way to test the app is using the remote version, deployed on Microsoft Azure and publicly accessible through the Internet.

To access this version, [head over to the app](https://neo4j-mean-front.azurewebsites.net).

Otherwise, continue to the next section of this guide.

# Neo4j MEAN app - local version
You can also deploy it locally. To do so, follow the instructions below.

## Requirements
You need to have installed :
* Node.js version 12 LTS from [here](https://nodejs.org/en/download/).
* Angular CLI. To install it, execute the following command :
```bash
npm install -g @angular/cli
```

## Foreword
In order to get data for the Neo4j database, the application queries an API. This API is built in the form of Azure Functions with a Node.js runtime.

To find how to deploy the graph and the API locally, head over to my [neo4j-mean-api Github repo](https://github.com/mariusconjeaud/neo4j-mean-api).

If you don't want to deploy it locally, and use the remote version but execute the app locally, I provided an option for this below.

## Build the app
Once the API is up and running - or you have decided to use the online version - you need to execute the front-end app.

### Local API
If you chose the local API option, execute the following command - this will open a new tab on your default browser with url *localhost:4200*

```bash
ng serve -o
```

### Remote API
If you chose the remote API option, execute the following command - this will open a new tab on your default browser with url *localhost:4200*

```bash
ng serve -o --prod=true
```

### Note on the --prod flag
The --prod flag that differenciates the two commands above, is simply that running *ng serve* builds then executes the app, with different environment variables.

The environment variables contain the API base URL :
* [Prod](src/environments/environment.prod.ts) targets the remote API
* [Environment](src/environments/environment.ts) targets localhost
