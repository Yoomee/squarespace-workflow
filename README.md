A test Squarespace setup.

## Setting up a new Squarespace site & repo

1. Set up a Squarespace site and enable developer mode: http://developers.squarespace.com/initial-setup/

2. Clone the Squarespace template:

  ```
  https://your-site.squarespace.com/template.git
  ```

3. Create an empty repo in Github for the project.

4. Rename the Squarespace git remote to live:

  ```
  git remote rename origin live
  ```

5. Add a remote for the Github repo:

  ```
  git remote add origin https://github.com/Yoomee/your-repo.git
  ```

6. Verify you have the live and origin remotes set up correctly:

  ```
  git remote -v
  ```

7. Push the template to the Github repo

  ```
  git push -u origin master
  ```

8. Install and configure Node Squarespace server, https://github.com/NodeSquarespace/node-squarespace-server

  ```
  npm install -g node-squarespace-server
  ```

  Add the server settings to template.conf
  
  ```
  "server": {
      "siteurl": "https://your-site.squarespace.com",
      // If you are in trial mode with your site
      "sandbox": true,
      // If you don't need full collection json data in navigation templates
      "fulldata": false
    }
  ```

  Add .sqs-cache to your .gitignore


## Setup for an existing site & repo

1. Install Node Squarespace server, https://github.com/NodeSquarespace/node-squarespace-server

  ```
  npm install -g node-squarespace-server
  ```

2. Clone the repo

    ```
    git clone https://github.com/Yoomee/your-repo.git
    ```

3. Set up a remote for live
    
  ```
  git remote add live https://your-site.squarespace.com/template.git
    ```

## Running the site locally

You can run the site locally, using the data from the live Squarespace site with your local version of the template.

Run the Node Squarespace server:

```
sqs server
```

You can then access the site on http://localhost:5050/. See https://github.com/NodeSquarespace/node-squarespace-server for other options.

You will be asked for the Squarespace username and password the first time you visit the local site.

## Workflow

Develop your feature on a feature branch.

PR into develop when complete.

When ready to release to live, merge develop into master and push master to live:

```
git push live master
```

You will be asked for the Squarespace username and password the first time you push to live.
