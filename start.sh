#!/bin/sh
# rsync -av /home/node/node_modules/@types /tmp/node_modules/
#rsync -av /home/node/node_modules/@apollo/react-hooks /tmp/node_modules/@apollo
#rsync -av /home/node/node_modules/@apollo/react-testing /tmp/node_modules/@apollo
#rsync -av /home/node/node_modules/@apollo/react-common /tmp/node_modules/@apollo
#rsync -av /home/node/node_modules/formik/ /tmp/node_modules/formik/
# rsync -av /home/node/node_modules/graphql-tag /tmp/node_modules/
#for performance reasons, we only copy the necessary type directories to the local node_modules
#bind mount
#directories=( )
for folder in @types @apollo apollo-client formik graphql-tag
do
    rsync -arv --include="*/" --include="*.d.ts" --include="package.json" --exclude="*" /home/node/node_modules/$folder/ /tmp/node_modules/$folder/
done
yarn start