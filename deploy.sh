#!/bin/bash

echo "updating gh-pages branch" &&
git checkout gh-pages &&
git fetch &&
git reset --hard origin/master &&

echo "Running build" &
cd angular &&
ng build --prod &&

echo "Moving dist to root dir" &&
cp dist/* ../ &&

echo "Committing and pushing to gh-pages" &&
git add ../ &&
git commit -m 'Deploy To Github Pages' &&
git push -f origin gh-pages &&

echo "Returning to original state" &&
cd - &&
git checkout -
