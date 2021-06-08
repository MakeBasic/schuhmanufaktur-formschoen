# Schuhmanufaktur Formschön
***MD.H Abschlussprojekt Website***

## Setup

- install ***node***
- install ***grunt***

on Missing write Access like `npm WARN checkPermissions Missing write access to /usr/local/lib/node_modules`:
```
sudo chown -R $USER /usr/local/lib/node_modules
```
if grunt already exist:
go to -> /usr/local/bin/ and delete 'grunt' and install grunt once again
```
npm install -g grunt-cli
```

## Usage
use command `grunt` to start the automatic _sass watcher and compiler_
