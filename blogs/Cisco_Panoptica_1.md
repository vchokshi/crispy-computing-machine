# Reviewing Cisco Panoptica
I recently was suggested to take a look at Cisco's Panoptica platform for Cloud Native Application Security. Since this product lands perfectly inside my Hedgehog, I immediately got to work.
This post will have roughly two themes:
A look at Cisco's Panoptica: What does it do, and more importantly, what problems does it solve?
An overview of the integration process of a Kubernetes cluster into Panoptica

## Getting Started
To get started, I need to integrate a single Kubernetes (K8s) cluster into Panoptica. Alas, I don't keep a running cluster, but I run a lab. Hence, what I need is a plan.
So here's my plan:
Build Kubernetes
Integrate Kubernetes into Panoptica.
Keep Building and Integrating.
Write this all down.

Easy, right? Have a plan, and follow it. Its that easy. But remember: A plan not written down is simply an idea.

## K8s Build Plan and Key Decisions
I'll start with is building a "vanilla" Kubernetes Cluster in Digital Ocean. I'm purposely choosing Digital Ocean as my Cloud. Why, you might ask? Well, for starters, I take roads less traveled. Its part of what I do.
More importantly the reason is that I understand Panoptica supports platforms like Google's GKE and Microsoft Azure's AKS, but we're talking "Cloud Native" here. And let's face it, who knows Cloud Native more than Cisco. Cisco built cloud, of course standing on the shoulders of giants.
A platform review of GKE or AKS inside Panoptica will be of value, but first I'm interested in a cloud native implementation. As such, I will build it.

##A Note on Service Mesh
We will need to address cross-cutting concerns inherent in large systems. Whether you subscribe to the AWS Well Architecture Framework or the Azure Cloud Adoption Framework, cross-cutting concerns are a necessary part of secure computing systems.
In this post, we will implement a service mesh, so I will start with Istio. Istio will be our Cloud Native Service Mesh, and we'll compare it to Cisco Calisti. We'll use Istio as our first, cloud native service mesh for this project. Then, we'll upgrade our Service Mesh from Istio to Calisti so we can see in the improvement of a Layer 3 and Layer 4 integrated service mesh for a Cisco on Cisco value proposition.

##A Note on Containers and Repositories
We'll use various containers along the way, but we'll start with the container that is home to http://www.iot4.net/. This container can be found in the single repository as I am partial to mono-repo, trunk based development.
As such, my readers will find what I mean when I say "It's in the code". It's in the code. It's in the single repository cited.
Digital Ocean and a Kubernetes Cluster
If you haven't already done so, follow the instructions here to get started with Digital Ocean and Terraform.
Next, clone my GitHub repository and navigate to the directory as shown in figure 1.
Inside this directory you will find all the necessary code to build your cluster. Depending on how you have configured your digital ocean, you will need to change a few values for your environment. (Mainly the DNS registrations). The code starts here at this commit if you want to follow along. The code is written in Terraform and is freely available for you to download a follow along.

## Next Steps
That's it for now, in my next post I'll be doing the Ansible build for the controller and the workers, build a few pods, stateful sets and much of the other knownsense in Kubernetes in prep to add it into Panoptica.
I'll also register an account for myself in Panoptica so I'm ready to start testing.

Merry Christmas and Happy Holidays!
Vihar
