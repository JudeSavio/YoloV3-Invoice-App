# YoloV3-Invoice-App

## About App:

After some research on image classification vs image segmentation. I decided to go with the faster approach which was image classification. This app uses a YoloV3 architecture trained on two classes which are called : invoice_detail & invoice_table. Have changed the filters and mask values accordingly for the trained classes and since I wasn't packing enough GPU for faster training time , I decideed to train it with Google Colab. Since all the heavy work is now down, I wanted to couple this app with an electron.js enabled frontend , run it as a desktop app. It uses a simple UI using vanilla HTML and CSS.

## Requirements :

1.(Will add a requirements.txt file soon).  
2. Yolov3 framework git clone.  
3. Visual Studio C++ 2019.  
4. Python3.  
5. Python3 packages : OpenCV & Pandas   
6. Suitable training templates and testing templates of Invoices.  

## Further Ideas for Improvement:

1. More Training examples for the same class to improve accuracy.
2. Need to experiment on Image segmentation techniques on same sample templates as well
