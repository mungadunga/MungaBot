module.exports = {
   name: 'fight',
   description: "fight command",
   execute(message, args){
      const Discord = require('discord.js')
      let user = message.mentions.members.first();
      let self = message.author.username;

      if(user){
         message.channel.send(self + " vs " + user.displayName); 
         let a = Math.ceil(Math.random() * 3);
         let b = Math.round(Math.random() * 10);
         let c = Math.round(Math.random() * 10);
         let d = Math.round(Math.random() * 10);

         if(a === 1){ 
            setTimeout(() => message.channel.send(`${self} rushes towards ${user.displayName} !`), 2000);

            if(b < 5){
               setTimeout(() => message.channel.send(self + " uses his fist to deal physical damage against " + user.displayName + "!"), 4000);

               if(c < 5){ 
                  setTimeout(() => message.channel.send(user.displayName + " uses his shield to block the attack!"), 6000);

                  if(d < 5){ //done
                        setTimeout(function(){ 
                           message.channel.send(user.displayName + " throws a grenade and wins the round!"); 
                        }, 8000);

                  } else if(d > 5){ //done
                        setTimeout(function(){ 
                           message.channel.send(user.displayName + " throws a grenade but " + self + " has a reverse card! " + self + " wins!"); 
                        }, 8000);
                  }

               }else if(c > 5){ //done
                  setTimeout(function(){ 
                        message.channel.send(user.displayName + " tried to dodge but got hit!"); 
                  }, 6000);

                  if(d <= 5){ //done
                        setTimeout(function(){ 
                           message.channel.send(user.displayName + " drinks a shot of vodka which made him into an overpowered russian, he yells CYKA BLYAT and destroys" + self + "'s head with his arm."); 
                        }, 8000);

                  }else if(d > 5){ //done
                        setTimeout(function(){ 
                           message.channel.send(user.displayName + " tired countering but was too weak and lost"); 
                        }, 8000);

                  }

               }

            }else if(b > 5){ //self attacks with gun
               setTimeout(function(){ 
                  message.channel.send(self + " brings out a tommy gun from his pocket and started blasting!"); 
               }, 4000);

               if(c < 5){ //done
                  setTimeout(function(){ 
                        message.channel.send(user.displayName + " got obliterated into pieces but throws something out of his pocket!"); 
                  }, 6000);

                  if(d < 5){ //done
                        setTimeout(function(){ 
                           message.channel.send(self + " was too curious so he picked it from the floor. He opens it and discovers a grenade. He threw it as far as possible but it exploded and " + self + " died!"); 
                        }, 8000);

                  } else if(d > 5){ //done
                        setTimeout(function(){ 
                           message.channel.send(self + " ignored it and won!"); 
                        }, 8000);

                  }

               }else if(c > 5){ //done
                  setTimeout(function(){ 
                        message.channel.send(user.displayName + " catches a bullet in midair and throws it at " + self + " with such power it went through his skin!"); 
                  }, 6000);

                  if(d < 5){ //done
                        setTimeout(function(){ 
                           message.channel.send(self + " couldn't dodge it. " + user.displayName + " won!"); 
                        }, 8000);

                  }else if(d > 5){ //done
                        setTimeout(function(){ 
                           message.channel.send(self + " ran away and never returned."); 
                        }, 8000);
                  }
               }
            }

         } else if(a === 2){ 
               setTimeout(function(){ 
                  message.channel.send(user.displayName + " remains defensive against " + self); 
               }, 2000);

               if(b < 5){
                  setTimeout(function(){ 
                     message.channel.send(self + " farts so bad " + user.displayName + " had to crouch to avoid the toxic blast"); 
                  }, 4000);

                  if(c < 5){
                     setTimeout(function(){ 
                           message.channel.send(user.displayName + " screams ZA WARUDO, and stops time. But " + self + " knew this was coming so he covered himself with a layer of fart which acted like a shield."); 
                     }, 6000);

                     if(d < 5){
                           setTimeout(function(){ 
                              message.channel.send(user.displayName + " punches " + self + " and time went back to normal. " + self + "'s shield was effective and melted " + user.displayName + "'s hand." + self + " wins!"); 
                           }, 8000);

                     } else if(d > 5){
                           setTimeout(function(){ 
                              message.channel.send(user.displayName + " outsmarted " + self + ", he disappeared for a moment, and after a few seconds, came back with a road roller and smashed him flat. " + user.displayName + " won!"); 
                           }, 8000);
                     }

                  }else if(c > 5){
                     setTimeout(function(){ 
                           message.channel.send(user.displayName + " brings out his revolver and shoots at " + self); 
                     }, 6000);

                     if(d < 5){
                           setTimeout(function(){ 
                              message.channel.send(self + " got hit but did not lose hope! He brings out a magic wand from his back pocket and screams AVADA KEDAVRA, killing " + user.displayName); 
                           }, 8000);

                     } else if(d > 5){
                           setTimeout(function(){ 
                              message.channel.send(user.displayName + " shoots again, finishing him. " + user.displayName + " wins!"); 
                           }, 8000);

                     }
                  }

               } else if(b > 5){
                  setTimeout(function(){ 
                     message.channel.send(self + " throws a knife at " + user.displayName + ", but he dodges"); 
                  }, 4000);

                  if(c < 5){
                     setTimeout(function(){ 
                           message.channel.send(self + " brought Thanos with him. Thanos stood behind him. " + user.displayName + " brought Big Chungus with him." ); 
                     }, 6000);

                     if(d < 5){
                           setTimeout(function(){ 
                              message.channel.send("Big Chungus was too lazy to continue the battle so he left. Thanos destoyed the shit outa " + user.displayName); 
                           }, 8000);

                     }else if(d > 5){
                           setTimeout(function(){ 
                              message.channel.send("Big Chungus traveled into another dimension where Thanos didn't even exist and " + user.displayName + " won the battle."); 
                           }, 8000);
                     }

                  }else if(c > 5){
                     setTimeout(function(){ 
                           message.channel.send(self + " swings his sword at " + user.displayName + " but he also dodged that attack."); 
                     }, 6000);

                     if(d < 5){
                           setTimeout(function(){ 
                              message.channel.send(self + " raged so hard that he commmited suicide. " + user.displayName + " wins."); 
                           }, 8000);

                     }else if(d > 5){
                           setTimeout(function(){ 
                              message.channel.send(self + " raged so hard he activated his ERASER69420 and yeeted " + user.displayName + " outa existence. " + self + " wins."); 
                           }, 8000);
                     }
                  }
               }

         } else if(a === 3){
               setTimeout(function(){ 
                  message.channel.send(user.displayName + " brings his tank and starts blasting at " + self); 
               }, 2000);

               if (b < 5){
                  setTimeout(function(){ 
                     message.channel.send(self + " builds a wall in front of him to protect himself. He then builds a helicopter and flies away."); 
                  }, 4000);
                  
                  if(c < 5){
                     setTimeout(function(){ 
                           message.channel.send("Surprisingly, " + user.displayName + " didn't follow him. It's a tie!"); 
                     }, 6000);

                  } else if(c > 5){
                     setTimeout(function(){ 
                           message.channel.send(user.displayName + " chases him. But his tank is too slow and runs out of oil."); 
                     }, 6000);

                     if(d < 5){
                           setTimeout(function(){ 
                              message.channel.send(self + " has a RPG! He shoots at " + user.displayName + "'s tank, which exploded. Victory for " + self + "!"); 
                           }, 8000);

                     } else if(d > 5){
                           setTimeout(function(){ 
                              message.channel.send(user.displayName + " launches himself towards " + self + " and uses his fist to destroy " + self + "'s face! Victory for " + user.displayName + "!"); 
                           }, 8000);

                     }

                  }

               } else if (b > 5){
                  setTimeout(function(){ 
                     message.channel.send(self + " switches to speed monado art. He quickly dodges every hit and rushes towards " + user.displayName); 
                  }, 4000);

                  if(c < 5){
                     setTimeout(function(){ 
                           message.channel.send(user.displayName + " says: tsugi ni omae wa NANII?? TO IU! And throws a dog out of nowhere."); 
                     }, 6000);

                     if(d > 0){
                           setTimeout(function(){ 
                              message.channel.send(self + " says: NANII?? and tries to dodge but the dog had already bitten his dick. " + self + " dies from pain. Victory for " + user.displayName); 
                           }, 8000);

                     }

                  } else if(c > 5){
                     setTimeout(function(){ 
                           message.channel.send(self + " reswitches to buster monado art. He swings his sword at " + user.displayName); 
                     }, 6000);

                     if(d < 5){
                           setTimeout(function(){ 
                              message.channel.send(user.displayName + " dodged the attack but it was so powerful it created a small explosion which killed " + user.displayName + ". Victory for " + self + "!"); 
                           }, 8000);

                     } else if(d > 5){
                           setTimeout(function(){ 
                              message.channel.send(user.displayName + " travels one second into the past and was able to dodge the attack. " + self + " switches back to speed art and tries to land some hits on " + user.displayName + " but he has already outsmarted him. During that one second time travel, he placed a few mines all over the field. BUT " + self + " outsmarted his outsmarting and switched to shield monado art which prevented him to die. He then swings his blade at " + user.displayName + ", finally eliminating him! " + self + " wins!"); 
                           }, 8000);

                     }

                  }

               }

         } 

      } else {

         const embedHELP = new Discord.MessageEmbed()
   
         .setColor(0xFF0000)
         .addField("Correct usage:", "`>fight` <@user>")
         .setFooter("For more info use `>info-fight`");
         message.channel.send(embedHELP);

      }
   }
}