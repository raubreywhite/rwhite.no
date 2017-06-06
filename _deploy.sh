#!/bin/sh

git config --global user.email "a@rwhite.no"
git config --global user.name "Richard White"

cd ~/git/rwhite.no/

git add .
git commit -m"Update the website" || true
git checkout gh-pages
git reset --hard master

rm README.md package.json
rm -rf static

cd build
cp -r . ../
cd ..
git add .
git commit -m"Update the website" || true
git push -f origin gh-pages
git checkout master
git reset --hard master

