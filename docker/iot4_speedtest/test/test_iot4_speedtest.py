from iot4_speedtest.iot4_speedtest import get_speedtest


def test_get_speedtest() -> int:
    assert type(get_speedtest()) is dict
    return 0
