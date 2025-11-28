[![Netlify Status](https://api.netlify.com/api/v1/badges/b4fc6248-5840-4383-9cfa-b2b3dcb7165a/deploy-status)](https://app.netlify.com/sites/avniproject/deploys)

See live - https://avniproject.org/

## Development - Getting Started
Install `gatsby-cli` globally - `npm install -g gatsby-cli`

In repo root:
- Ensure the correct Node.js version - `nvm use`
- Install dependencies - `npm install` or `make deps`
- Start development server - `gatsby develop` or `make start`
- Check the website at ```http://localhost:8000```


## How to write a blog? 

Writing a blog is a common activity that is not developer related. Here is a detailed version of how to add a blog to the [Avni website](https://avniproject.org) for non-developers. For details such as git knowledge, it points out to a bunch of locations, and for the writing part, this section shows you the right places to make changes.  

#### Set up your machine
You will first need to be able to run the blog locally, or you won't have any guarantee of it working for real. It will also help in verifying if your formatting really worked fine, if your image really shows up etc. In order to do that
- Clone the repository to your laptop
- [Install npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- Follow the ```Getting Started``` section above to set up the blog on your machine

#### Creating the blog
- Your blog should be in the ```src/blog``` directory with a file name ```<YYYY-MM-DD-title>.md```. 
- Any images you add should be in the ```static/img/``` directory. Add a directory with the same name as the blog and add your images there. 
- To understand how to link your image with your blog, look at other blogs
- All your content will be in markdown format. Markdown is easy, try out a few samples from [here](https://www.markdowntutorial.com/) or just look back at our previous blogs

#### Publishing the blog
- Once you are happy with the way the blog turned up in your [local server](http://localhost:8000), push the commit to Github or raise a [pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request). You will need some familiarity to Git and Github to do this. Checkout documentation from [Github](https://docs.github.com/en/get-started/using-git) and learn a few tricks from there. 
