#!/bin/sh

set -e

[ -z "${GITHUB_PAT}" ] && exit 0
[ "${TRAVIS_BRANCH}" != "master" ] && exit 0

git config --global user.email "a@rwhite.no"
git config --global user.name "Richard White"

git add .
git commit -m"Update the website" || true
git checkout gh-pages
git clone -b gh-pages https://raubreywhite@github.com/${TRAVIS_REPO_SLUG}.git book-output
cd book-output
cp -r ../_book/* ./
git add --all *
git commit -m"Update the book" || true
git push -q origin gh-pages
