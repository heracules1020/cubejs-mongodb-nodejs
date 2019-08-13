# cubejs-mongodb-nodejs
#Install and Run MongoDB with Homebrew

Open the Terminal app and type brew update.
After updating Homebrew brew install mongodb
After downloading Mongo, create the “db” directory. 
This is where the Mongo data files will live. You can create the directory in the default location by running sudo mkdir -p /data/db
Make sure that the /data/db directory has the right permissions by running.

> sudo chown -R `id -un` /data/db

#Install BI Connector

- OpenSSL install
  > /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"; brew update && brew install openssl
- Download the MongoDB Connector for BI.
   Download the BI Connector from https://www.mongodb.com/download-center/bi-connector
- Install the MongoDB Connector for BI.
   > tar -xvzf mongodb-bi-osx-x86_64-{version}.tgz  
   > sudo install -m755 bin/mongo* /usr/local/bin/
 -Start mongosqld.
   > mongosqld
  
