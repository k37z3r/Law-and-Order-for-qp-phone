--[[
 .----------------. .----------------. .----------------.
| .--------------. | .--------------. | .--------------. |
| |   ______     | | |      __      | | |     ____     | |
| |  |_   _ \    | | |     /  \     | | |   .'    `.   | |
| |    | |_) |   | | |    / /\ \    | | |  /  .--.  \  | |
| |    |  __'.   | | |   / ____ \   | | |  | |    | |  | |
| |   _| |__) |  | | | _/ /    \ \_ | | |  \  `--'  /  | |
| |  |_______/   | | ||____|  |____|| | |   `.____.'   | |
| |              | | |              | | |              | |
| '--------------' | '--------------' | '--------------' |
 '----------------' '----------------' '----------------'

© Copyright 2022 all rights reserved

All contents, especially the source code of all files, are protected by copyright. All rights, including reproduction, publication, editing and translation, are reserved.
A legal version for use can be purchased at https://bao.tebex.io/
]]--
local a=exports['qb-core']:GetCoreObject()RegisterNUICallback('GetLawAndOrder',function(b,c)a.Functions.TriggerCallback('qb-phone:server:GetLawAndOrder',function(d)c(d)end)end)RegisterNUICallback('getLawCategories',function(b,c)a.Functions.TriggerCallback('qb-phone:server:getLawCategories',function(e)c(e)end)end)RegisterNUICallback('saveLawAndOrder',function(e,c)a.Functions.TriggerCallback('qb-phone:server:isAdmin',function(f)if f then if e~=nil then if e.category~=nil and e.category~=nil and e.para~=nil and e.legaltitle~=nil and e.legaltext~=nil and e.minsentence~=nil and e.maxsentence~=nil and e.lawid~=nil then if string.len(e.category)>2 and string.len(e.para)>0 and string.len(e.legaltitle)>2 and string.len(e.legaltext)>9 and string.len(e.minsentence)>1 and string.len(e.maxsentence)>1 and string.len(e.lawid)>0 then a.Functions.TriggerCallback('qb-phone:server:saveLawAndOrder',function(g)c(g)end,e)else print("data length: short")end else print("data2: nil")end else print("data: nil")end else print("You are not an Admin")end end)end)RegisterNUICallback('saveLawAndOrderCats',function(e,c)a.Functions.TriggerCallback('qb-phone:server:isAdmin',function(f)if f then if e~=nil then if e.categories~=nil then if string.len(e.categories)>2 then a.Functions.TriggerCallback('qb-phone:server:saveLawAndOrderCats',function(g)c(g)end,e)else print("data length: short")end else print("data2: nil")end else print("data: nil")end else print("You are not an Admin")end end)end)RegisterNUICallback('deleteLawAndOrder',function(e,c)a.Functions.TriggerCallback('qb-phone:server:isAdmin',function(f)if f then if e~=nil then if e.lawid~=nil then if string.len(e.lawid)>0 then a.Functions.TriggerCallback('qb-phone:server:deleteLawAndOrder',function(g)c(g)end,e)else print("data length: short")end else print("data2: nil")end else print("data: nil")end else print("You are not an Admin")end end)end)RegisterNUICallback('isAdmin',function(b,c)a.Functions.TriggerCallback('qb-phone:server:isAdmin',function(f)if f then c("ok")else c("not-ok")end end)end)