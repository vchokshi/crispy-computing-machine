from struct import *
import socket

MAX_BUFFER_SIZE=65535

def tcp_head( raw_data):
 (src_port, dest_port, sequence, acknowledgment, offset_reserved_flags) = unpack('! H H L L H', raw_data[:14])
 offset = (offset_reserved_flags >> 12) * 4
 flag_urg = (offset_reserved_flags & 32) >> 5
 flag_ack = (offset_reserved_flags & 16) >> 4
 flag_psh = (offset_reserved_flags & 8) >> 3
 flag_rst = (offset_reserved_flags & 4) >> 2
 flag_syn = (offset_reserved_flags & 2) >> 1
 flag_fin = offset_reserved_flags & 1
 data = raw_data[offset:]
 return src_port, dest_port, sequence, acknowledgment, flag_urg, flag_ack, flag_psh, flag_rst, flag_syn, flag_fin, data

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
  #print(raw_data)
  eth = ethernet_head(raw_data)
  #print('D: {}, S: {}, P: {}'.format(eth[0], eth[1],eth[2]))
  if eth[2] == 8:
   ipv4 = ipv4_head(eth[3])
   if ipv4[3] == 6:
    tcp = tcp_head(ipv4[6])
   elif ipv4[3] == 1:
    print("Ping")
    #icmp = icmp_head(ipv4[7])
   #elif ipv4[3] == 17:
    #print("UDP")
    #udp = udp_head(ipv4[7])


main()
