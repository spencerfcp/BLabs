# blab
Test App for B Labs

Hello BLabs!
Thank you in advance for taking the time out to look over this application. I'm excited to meet with you and look forward to working together in the future. Additionally, thank you for introducing me to Ember.js. I haven't had a chance to really learn the framework in my current position and this gave me a great excuse to do some research on it. I may actually prefer it to Angular. Especially when working in conjunction with Laravel.

To give you a brief run down, this simple application integrates with Yelps API and uses Ember.JS and Laravel You can create an account and do a look up to see the best resturants in a specific area. This app also provides basic search functionality so you can filter your results off price. This application is also fully optimized for mobile devices.
If you have any questions in regards to this Application, please don't hesitate to let me know.
I can be reached at 267-294-7650 or jeff@jeff-spencer.com 

Thanks again, and hope to speak to your soon. Instructions on how to set up a VM to run this application can be found below: 



Clone this repository into your desired folder on your local system. Make sure you remember this directory for later. 

```
git clone https://github.com/spencerfcp/blabs

```
You'll need Virtual Box, Vagrant, and nfs server installed locally for this application to run in a virtual environment. (You can use your own vm management software, but this will require some additional customization).
```
sudo apt-get install nfs-kernel-server
sudo apt-get install virtualbox
sudo apt-get install vagrant
sudo apt-get install virtualbox-dkms'
```

After these packages are installed, go to the directory you selected earlier. Copy the contents of the Homestead folder to

```
~/.homestead
```

You will need to generate an RSA key in this folder. (Homestead may generate it for you if it's unavailable). 

The Homestead.yaml file provides the configuration for your homestead environment. You will need to adjust this to the following:

```
authorize: ~/.ssh/id_rsa.pub

keys:
    - ~/.ssh/id_rsa

folders:
    - map: ~/BlabsApp
      to: /App ##Apache Web Root for VM##
      type: "nfs" ##Necessary to link local files to VM##

sites:
    - map: homestead.app ##Url of homestead app, handles API requests from ember##
      to: /AppCode/Lavarel/public  ## add /Lavarel/public to selected vm web root##
```

Copy and paste the contents of Vagrant and copy the "scripts" folder to any folder. Enter this folder, and run ```vagrant up```. This should bring up your VM.


After you SSH in (vagrant ssh), access the vm web root. 

Run the two following commands in the ember-serve directory:

Install Ember CLI
```
sudo npm install -g ember-cli 
sudo npm install -g phantomjs2'
```
Swap back to the root folder, and open up Lavarel.

Run ```composer install --no-scripts```, this will guarantee necessary dependancies are installed.

Once installed, run ```php artisan migrate```. This will install all the necessary tables for the application to work.

At this point, you can run ```ember serve``` within the ember-serve directory, which will make the application available at:

http://localhost:4200  (May differ based on your configuration)

Visit this URL to view the application. 

You should not need to customize any .env variables, as they've been included within this project temporarily to provide ease of use.



