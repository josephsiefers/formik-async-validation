#!/bin/sh
rsync -av /home/node/node_modules/@types /tmp/node_modules/
rsync -av /home/node/node_modules/@apollo/react-hooks /tmp/node_modules/@apollo
rsync -av /home/node/node_modules/@apollo/react-testing /tmp/node_modules/@apollo
rsync -av /home/node/node_modules/@apollo/react-common /tmp/node_modules/@apollo
rsync -av /home/node/node_modules/formik /tmp/node_modules/
rsync -av /home/node/node_modules/graphql-tag /tmp/node_modules/
yarn start