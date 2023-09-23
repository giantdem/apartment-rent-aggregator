To deploy RabbitMQ, use:

```powershell
helm install rabbitmq --set auth.username=<value>,auth.password=<value>,rabbitmq.erlangCookie=<value> oci://registry-1.docker.io/bitnamicharts/rabbitmq
```

To delete:

```powershell
helm delete rabbitmq
kubectl delete pvc --all
```
