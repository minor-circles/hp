# 今年のマイサー合説に参加するサークルのリスト
import csv
def main():
    circle2id={}
    with open('circle2id.csv', 'r', encoding='utf-8_sig') as f:
        reader = csv.reader(f)
        for i, row in enumerate(reader):
            circle2id[row[0]]=row[1]

    with open('answers/attend_2024.txt', 'r', encoding='utf-8_sig') as f:
        circles = f.read().splitlines()

    md_body=f'''---
title: 'マイサー合説 2024年度参加団体一覧'
excerpt: ''
coverImage: '/assets/thumbnail.png'
date: '2020-03-29'
ogImage:
  url: '/assets/thumbnail.png'
tags:
  - '記事'
---
2024年度マイナーサークル合同説明会に参加しているサークルの一覧です。  
注  
※特筆がなければすべて大阪大学非公認団体です  
※★が付いている団体は合同説明会の運営です  
'''
    md_body+='\n'.join([f'- [{circle}](/circles/{circle2id[circle]})' for circle in circles ])
    
    with open('../_posts/posts/attend-circles-2024.md', 'w', encoding='utf-8') as f:
        f.write(md_body)
    
if __name__ == '__main__':
    main()