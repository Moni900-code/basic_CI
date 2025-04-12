# Basic CI/CD Setup with GitHub Actions for Node.js and Flask Apps

## 📝 Introduction

In the world of modern software development, **speed** and **reliability** are everything. Manual testing and deployment can be error-prone and time-consuming. That’s where **CI/CD (Continuous Integration and Continuous Deployment)** comes in.

**CI/CD** automates the entire software delivery process — from running tests on every code change to deploying it when everything looks good. This ensures that bugs are caught early, code remains stable, and updates are delivered faster.

In this documentation, you'll learn how to set up a basic **CI pipeline using GitHub Actions** for **Node.js** application. With this setup:

-  Every push to your GitHub repository will **automatically trigger test cases**.
-  If any test fails, the workflow **stops**, preventing bad code from being merged or deployed.

## Workflow Diagram:
  ![Diagram](images/files.png)

This guide walks you through:
- Setting up a basic Node.js app
- Writing tests using Jest
- Creating a CI workflow file
- Testing the flow on GitHub
- Viewing outputs for both success and failure scenarios

Let’s get started and make your development process smoother and smarter with automation! 

## 1. Create Node.js Application

### 📌 Node.js App Setup

```bash
mkdir basic_CI && cd basic_CI
npm init -y
npm install express jest supertest
```
Now, create some basic files:
1. index.js (Main App File)
2. server.js (Running the Server)
3. Test.js

![Alt Text](images/files.png)

And add the test script in package.json file as like this:

```bash
"scripts": {
  "test": "jest"}
```
Here, **jest** use for **Node.js**


## 2. Create GitHub Actions Workflow
### 📌 Create .github/workflows/ci.yml

![alt text](images/ci.yml.png)

## 3. Push to GitHub Repository
After setting everything up, push the all code files to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/your-repo.git
git push -u origin main
```

## 3. Now, Test CI/CD Functionality
Whenever new code is pushed or a pull request is made, GitHub Actions will automatically run tests for the Node.js and Flask apps.  

If the tests pass ✅, a green checkmark will appear.  

If the tests fail ❌, GitHub Actions will show a red cross.
## Github output form Actions tab: 
![alt text](images/github_output.png)

## Terminal Outputs are like this: 
![alt text](images/server.js.png)

![alt text](images/test.js.png)

This way, we can complete the CI-CD setup for Node.js Application.
