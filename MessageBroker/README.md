It's OK to use basic deployment for RabbitMQ. But alternatively, we can use Helm as recommended.

To deploy RabbitMQ via Helm, use:

```powershell
helm install rabbitmq --set auth.username=<value>,auth.password=<value>,rabbitmq.erlangCookie=<value> oci://registry-1.docker.io/bitnamicharts/rabbitmq
```

To delete:

```powershell
helm delete rabbitmq
kubectl delete pvc --all
```
