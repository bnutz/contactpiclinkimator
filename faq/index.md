## Frequently Asked Questions - Contact Pic Linkimator

---

### How to set a Contact Pic to my friend's social media profile picture?

##### Option 1:
1. Open **Contact Pic Linkimator** and select a contact entry.
1. Tap ![the Add button](ic_add_circle_black_24px.svg) and enter your friends' Instagram, Twitter, Facebook, etc. usernames to link their social media usernames to your address book.
1. Tap ![the Up Arrow button](ic_file_upload_black_24px.svg) next to the username you want to use to set that as the Contact Pic for this entry.

##### Option 2:
1. Open your device's web browser and navigate to your friend's social media profile page.
1. Once loaded, share the link into **Contact Pic Linkimator**.
1. The URL will appear in the import box, click `OK` to add it to the import list on the right.
1. In the Contact List on the left, locate and tap your friend's contact entry to highlight it.
1. Tap the just-added username on the right to link it to the selected contact.
1. To set the pic immediately, long press the contact entry to load into its page and tap the ![the Up Arrow button](ic_file_upload_black_24px.svg).

**Note:** (When a username is successfully added to the contact's username list, the latest profile image for that username will appear. Tap the image to view the image in fullscreen)*

---

### How to keep my Contact Pics updated with my friends' latest profile images?

1. Go to the contact you want to keep in sync and make sure a target username is selected (see above).
1. Enable the `Scheduled Sync` toggle button
1. Go to the `Sync Schedule` page (via the navigation drawer on the left)
1. Enable the `Enable Scheduled Sync` toggle button
1. Configure your sync options

**Note:** The sync tasks is handled by Android's own JobScheduler service, which automatically determines the best time to start a sync operation (depending on battery level, network avaiabilty, available resources, etc.). Contact Pic Linkimator is only able to submit the sync tasks as a scheduled job, it does not control the start times itself. For more info, see [here](https://medium.com/google-developers/scheduling-jobs-like-a-pro-with-jobscheduler-286ef8510129).

---

### How to batch link all my friends at once? (How to extract username lists)
- See here: [How to Extract Username Lists from your Social Media Pages](how_to_extract_username_lists)

---

### Why can't I just login to my social media account and have the app automatically download my friend lists?

##### Reason 1:
Because I don't want to deal with a bunch of credentials, permissions, authentications or anything like that.
  - **Contact Pic Linkimator** will only ever download from publically available image links. If your friend has their social media account locked down from public access, then this app will probably not work for their username. (Though usually the profile pic might still be linkable).

##### Reason 2:
Because this is actually no longer possible for most social network APIs. A couple of years ago you could easily download a users' full friend list - but since then - security, privacy and spam concerns have led the major social networks to understandably lock down the 'open-ness' of their API platforms and focus more heavily on privacy and protection. 

For example, when *App X* asks you to log in with Facebook, *App X* will only be able to show you Facebook friends who have also installed *App X* and have also logged in with their own Facebook accounts, *and* have also given *App X* permission to view their friends list. *App X* will not be able to see or view any other users outside of this scope.

So unless you get all your friends to also download and install [**Contact Pic Linkimator**](https://play.google.com/store/apps/details?id=com.justbnutz.contactpicturelinkimator) (which would be nice =), it makes this approach not really feasible for what we wanna achieve.

---
