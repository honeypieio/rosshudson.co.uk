#!/bin/bash

echo -e "\033[0;32mDeploying updates to GitHub...\033[0m"

# Build the project.
hugo

# Add changes to git.
sudo git add -A

# Commit changes.
msg="rebuilding site `date`"
if [ $# -eq 1 ]
  then msg="$1"
fi

sudo git commit -m "$msg"

# Push source and build repos.
sudo git push origin master
sudo git subtree push --prefix=public https://github.com/honeypieio/rosshudson.co.uk.git gh-pages
