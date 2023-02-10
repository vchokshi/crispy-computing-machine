# Kubernetes in Digital Ocean

This is a long lived lab that builds a kubernetes cluster in digital ocean as a test bed for APM Tools.

APM tools tested are:
- Cisco's Panoptica
- Honeycomb
- Kubeview (not evaluated, used for learning)
- Prometheus
- New Relic

## Notes:

### Kubeview
Kubview does not create an external DNS name. Use doctl or kubectl to get the IP Address of the Load Balancer

### Panoptica
Panoptica needs a fresh download of a gzip tar that contains a shared secret. 
Please generate one if you're testing Panoptica. 
The code looks for a file called `do.tar.gz` in `~` to work properly.

## Destroy
Please use doctl to check that all cost bearing resources are destroyed after using the `destroy` tags of ansible. I am not responsible for excessive costs in your cloud.
