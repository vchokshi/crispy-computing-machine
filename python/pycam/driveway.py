import cv2

southgate = cv2.VideoCapture("rtmp://192.168.86.35/bcs/channel0_sub.bcs?channel=0&stream=1&user=admin&password=admina")

while(1):

    ret, frame = southgate.read()
    cv2.imshow('SOUTHGATE', frame)
    cv2.waitKey(1)
