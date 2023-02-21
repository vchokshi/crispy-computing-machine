from struct import *
import socket

MAX_BUFFER_SIZE=65535

def get_ip(addr):
 return '.'.join(map(str, addr))

def ipv4_head(raw_data):
 version_header_length = raw_data[0]
 version = version_header_length >> 4
 header_length = (version_header_length & 15) * 4
 ttl, proto, src, target = unpack('! 8x B B 2x 4s 4s', raw_data[:20])
 data = raw_data[header_length:]
 return version, header_length, ttl, proto, get_ip(src), get_ip(target), data

def get_mac_addr(mac_addr):
  return "%x:%x:%x:%x:%x:%x" % unpack("BBBBBB",mac_addr)

def ethernet_head(raw_data):
 dest, src, prototype = unpack('! 6s 6s H', raw_data[:14])
 dest_mac = get_mac_addr(dest)
 src_mac = get_mac_addr(src)
 proto = socket.htons(prototype)
 data = raw_data[14:]
 return dest_mac, src_mac, proto, data

def main():
 s = socket.socket(socket.AF_PACKET, socket.SOCK_RAW, socket.ntohs(3))
 while True:
  raw_data, addr = s.recvfrom(MAX_BUFFER_SIZE)
  eth = ethernet_head(raw_data)
  if eth[2] == 8:
   ipv4 = ipv4_head(eth[3])
   print('D: {}, S: {}, P: {} IPv4: {}, Length: {}, TTL: {} P: {}, S: {} D: {}'.format(eth[0], eth[1],eth[2], ipv4[0], ipv4[1],ipv4[2], ipv4[3], ipv4[4], ipv4[5]))

main()
