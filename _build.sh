cd /analyses/raubreywhite.github.io/xsrc_app
npm run build

rm -rf /analyses/raubreywhite.github.io/static

mv build/* ../
