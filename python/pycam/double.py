import cv2
import threading

class camThread(threading.Thread):
    def __init__(self, previewName, camIP):
        threading.Thread.__init__(self)
        self.previewName = previewName
        self.camIP = camIP
    def run(self):
        print("Starting " + self.previewName)
        camPreview(self.previewName, self.camIP)

def camPreview(previewName, camIP):
    #cv2.namedWindow(previewName)

    camID=f'rtmp://{camIP}/bcs/channel0_sub.bcs?channel=0&stream=1&user=admin&password=admina'

    cam = cv2.VideoCapture(camID)

    if cam.isOpened():
        rval, frame = cam.read()
    else:
        rval = False

    while rval:
        cv2.imshow(previewName, frame)
        rval, frame = cam.read()
        key = cv2.waitKey(20)
        if key == 27:  # exit on ESC
            break
    cv2.destroyWindow(previewName)

# Create threads as follows
thread1 = camThread("Driveway", '192.168.86.38')
thread2 = camThread("Southgate", '192.168.86.35')

thread1.start()
thread2.start()
print()
print("Active threads", threading.activeCount())
