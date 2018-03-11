
#!/bin/bash

set -e
##Test creation of vpc, cluster, and container with defaults

HOSTED_ZONE=$1
IMAGE=$2
PORT_MAPPING=$3
VPC_NAME=$4
CLUSTER_NAME=$5
SERVICE_NAME=$6

./amazonian --HostedZoneName=${HOSTED_ZONE} --Image=${IMAGE} --PortMapping=${PORT_MAPPING} \
--VPCName=${VPC_NAME} --ClusterName=${CLUSTER_NAME} --ServiceName=${SERVICE_NAME}