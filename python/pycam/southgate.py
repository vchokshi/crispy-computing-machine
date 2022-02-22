import cv2

driveway = cv2.VideoCapture("rtmp://192.168.86.38/bcs/channel0_sub.bcs?channel=0&stream=1&user=admin&password=admina")

while(1):

    ret, frame = driveway.read()
    cv2.imshow('DRIVEWAY', frame)
    cv2.waitKey(1)
