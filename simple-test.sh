#!/bin/bash

set -e

##first, spin up the container
npm run docker-run

## now just make sure we can hit it

curl --fail localhost/