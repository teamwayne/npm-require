# npm-require
# Get the latest from GitHub, public repo:
$ npm install username/my-new-project --save-dev
# GitHub, private repo:
$ npm install git+https://token:x-oauth-basic@github.com/username/my-new-project.git#master
$ npm install git+ssh://git@github.com/username/my-new-project.git#master

# … or from Bitbucket, public repo:
$ npm install git+ssh://git@bitbucket.org/username/my-new-project.git#master --save-dev
# Bitbucket, private repo:
$ npm install git+https://username:password@bitbucket.org/username/my-new-project.git#master
$ npm install git+ssh://git@bitbucket.org/username/my-new-project.git#master

# … or, if you published as npm package:
$ npm install my-new-project --save-dev
