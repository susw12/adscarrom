#!/usr/bin/python3
#crypt_status=release(v2.0) decrypt_status=release(v2.0)
import random
def strike(string):
    'Encrypts variable \'string\', returns a string'
    totalvalue=''
    final=''
    keysymbols=['~','&','?','%','!','@','#','$','^','&','*','_','+','=','|','<','>','`']
    key=''
    split2=keysymbols.pop(random.randint(0,len(keysymbols)-1))
    split3=keysymbols.pop(random.randint(0,len(keysymbols)-1))
    split4=keysymbols.pop(random.randint(0,len(keysymbols)-1))
    split5=keysymbols.pop(random.randint(0,len(keysymbols)-1))
    for char in string:
        firstint=0
        secondint=0
        thirdint=0
        fourthint=0
        fifthint=0
        value=ord(char)
        split=random.randint(2,5)
        
        #add to split key
        if split==2:
            key+=split2
        elif split==3:
            key+=split3
        elif split==4:
            key+=split4
        else:
            key+=split5
        
        #convert to unicode
        #split2
        if split==2:
            firstint=random.randint(0,value)
            secondint=value-firstint
            firstint=str(firstint)
            secondint=str(secondint)
            final+=firstint+'-'+secondint+'-'
        #split3
        elif split==3:
            firstint=random.randint(0,value)
            secondint=random.randint(0,value-firstint)
            thirdint=value-(firstint+secondint)
            firstint=str(firstint)
            secondint=str(secondint)
            thirdint=str(thirdint)
            final+=firstint+'-'+secondint+'-'+thirdint+'-'
        #split4
        elif split==4:
            firstint=random.randint(0,value)
            secondint=random.randint(0,value-firstint)
            thirdint=random.randint(0,value-(firstint+secondint))
            fourthint=value-(firstint+secondint+thirdint)
            firstint=str(firstint)
            secondint=str(secondint)
            thirdint=str(thirdint)
            fourthint=str(fourthint)
            final+=firstint+'-'+secondint+'-'+thirdint+'-'+fourthint+'-'
        #split5
        else:
            firstint=random.randint(0,value)
            secondint=random.randint(0,value-firstint)
            thirdint=random.randint(0,value-(firstint+secondint))
            fourthint=random.randint(0,value-(firstint+secondint+thirdint))
            fifthint=value-(firstint+secondint+thirdint+fourthint)
            firstint=str(firstint)
            secondint=str(secondint)
            thirdint=str(thirdint)
            fourthint=str(fourthint)
            fifthint=str(fifthint)
            final+=firstint+'-'+secondint+'-'+thirdint+'-'+fourthint+'-'+fifthint+'-'
    return split2+split3+split4+split5+'/'+key+final+key
def fade(string):
    'decrypt(encrypted)-->\'string\''
    ints=['0','1','2','3','4','5','6','7','8','9']
    keysymbols=['~','&','?','%','!','@','#','$','^','&','*','_','+','=','|','<','>','`']
    symbolsused=[]
    values=[]
    message=''
    integer=''
    totalvalue=0
    valid=None
    key=[]
    split2=''
    split3=''
    split4=''
    split5=''
    #validate
    for char in string:
        if (char in ints or char=='-' or char in keysymbols or char=='/') and str(string)==string:
            valid=True
        else:
            break
    if valid==True:
        #determine symbol set
        index=0
        for char in string:
            if index==0:
                split2=char
                symbolsused.append(char)
            elif index==1:
                split3=char
                symbolsused.append(char)
            elif index==2:
                split4=char
                symbolsused.append(char)
            elif index==3:
                split5=char
                symbolsused.append(char)
            index+=1
        #remove splitkey from beginnning
        string=string[5:]

        #determine split key
        for char in string:
            if char in symbolsused:
                key.append(char)
            else:
                break
        
        #split into individual values
        for char in string:
            if char in ints:
                integer+=char
            elif char=='-':
                values.append(int(integer))
                integer=''

        #group and decode values
        while len(values)>0 and len(key)>0:
            split=key.pop(0)
            if split==split2:
                message+=chr(int(values.pop(0))+int(values.pop(0)))
            elif split==split3:
                message+=chr(int(values.pop(0))+int(values.pop(0))+int(values.pop(0)))
            elif split==split4:
                message+=chr(int(values.pop(0))+int(values.pop(0))+int(values.pop(0))+int(values.pop(0)))
            elif split==split5:
                message+=chr(int(values.pop(0))+int(values.pop(0))+int(values.pop(0))+int(values.pop(0))+int(values.pop(0)))
        return message

