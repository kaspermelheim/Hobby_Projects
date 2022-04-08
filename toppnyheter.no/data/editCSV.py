# -*- coding: utf-8 -*-
"""
Created on Sat Feb 22 18:07:21 2020

@author: Kasper
"""
import csv


def test2():

    #Fil du vil hente data fra
    with open("vg_alle_nyheter.csv","r", encoding='utf8') as source:
        rdr= csv.reader(source, delimiter=',')
        #Fil du vil skrive til
        with open("test.csv","w", encoding='utf8') as result:
            wtr= csv.writer(result, delimiter=',')
            for r in rdr:
                #for col in range(len(r)):
                    #r[col] = '"'+r[col]+'"'
                        
                    #Hvor mange rader du vil ha ut i ny csv fil
                    
                #wtr.writerow(( r[-1], r[3],r[7]))
                wtr.writerow((r[4],r[5],r[3])) 
                    #wtr.writerow(('"'+r[-1]+'"','"'+r[3]+'"','"'+r[4]+'"','"'+r[5]+'"','"'+r[6]+'"','"'+r[7]+'"')) 

test2()