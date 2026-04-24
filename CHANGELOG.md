# Version 1.0.0
  > **Oof Bot came To life !**\
  > `++First Time alive` 
  

  ## Features
  1. **It works (For now)**
  2. Slash commands : 
      - Ping
      - Yt-Downloader
  
  > [!NOTE]\
  > The first version still was very simple.\
  > I **LOST** all the commit history, so I dont remember properly what was the changes, SORRY.

# Version 1.1.0
  > **_Oh !_ Oof its learning how to walk properly**\
  > `+Structure Changes +Commands ++Tasks ++Cache Manager ++Data Master`

  >[!WARNING]
  > This version its not working for now, I need to finish some bullshits first.

  ## Changes:
   1. Now the bot DEF config is a Json File
   2. Slash commands Now have a folder for Each command type
   3. Env files have you own folder in `src/Configs/env`
   4. `ClientBase.js` was moved to `src/Classes/constructors`

  ## Features:
  
   ### New Command: `/Roll-a-dice`
   *Roll a dice, test your luck, or ask questions too, he may or not answer them correctly...*
   > **Parameters :** `question : OPTIONAL`.

   ### Dm Messages
   Now Oof Bot can Handle Dm messages like a GOD.\ 
   He can Answer any DM message, but dont abuse, or be a creep, he may Ignore you.

   ### Tasks
   Yep, you read that right, this mf bot now has Tasks.*But what are Tasks ?*\
   > Tasks on this context are indless executions, this will be better understandable in the Feature below.

   ### Tasks/Presence
   An endless Tasks that **changes** the Bot Activity time to time,\
   thus simulating a presence beyond simply responding to interactions.

   ### String Translations
   Using the `src/Modules/TranslateString.js` and the languages at `src/Lang`, this will make possible to translate all the
   Strings manually.
   > [!NOTE]
   > This Feature is not working for now, but it still being one anyway ._.

   ### Cache
   I've created `Classes/Cache.js` that can save temporarily saving files and other\
   heavy I/O loads speeds up reading processes and general actions.\
   Using algorithms in different contexts such as **TTL, LRU, and LFU**.

   ### FileManager
   I created this class to make it easier to obtain paths, files, and read them.

   ### Data Master
   And finally, a database manager. But I wasn't fancy enough to use highly advanced databases; I prefer to be more chill and used a simple JSON file (for now).
  In this class, you can easily manage data from each guild (or not, depending on how confusing my code is to you).
   

    

  
