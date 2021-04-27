import speedtest


def get_speedtest():
    servers = []

    threads = None

    s = speedtest.Speedtest()
    s.get_servers(servers)
    s.get_best_server()
    s.download(threads=threads)
    s.upload(threads=threads)

    return s.results.dict()
