# -*- coding: utf-8 -*-
"""
Created on Sat Feb 22 18:07:21 2020

@author: Kasper
"""
import csv
with open("source","rb") as source:
    rdr= csv.reader( source )
    with open("result","wb") as result:
        wtr= csv.writer( result )
        for r in rdr:
            wtr.writerow( (r[0], r[1], r[3], r[4]) )