#!/bin/sh

git config --global user.email "a@rwhite.no"
git config --global user.name "Richard White"

cd ~/git/rwhite.no/

git add .
git commit -m"Update the website" || true
git checkout gh-pages
git reset --hard master

cd build
rm -rf public
rm -rf src
cp -r * ../
git add .
git commit -m"Update the website" || true
git push -f origin gh-pages
git checkout master
