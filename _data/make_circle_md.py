# フォームの回答のexcelデータからマークダウンを生成
import pandas as pd
import csv
def main():
    circle2id={}
    with open('circle2id.csv', 'r', encoding='utf-8_sig') as f:
        reader = csv.reader(f)
        for i, row in enumerate(reader):
            circle2id[row[0]]=row[1]
    
    CIRCLES={}
    for year in [2023,2024]: 
      filename=f'answers/{year}.xlsx'
      df = pd.read_excel(filename)
      for i,(_,line) in enumerate(df.iterrows()):
          timestamp=line['タイムスタンプ'] or ''
          circle_name=line['サークル名'] or ''
          member_count=line['部員数'] or ''
          founding_date=line['創設年月日'] or ''
          place=line['活動場所'] or ''
          contents=line['活動内容'] or ''
          message=line['メッセージ'] or ''
          contact=line['連絡先'] or ''
          contents_with_no_newline = contents.replace('\n','\n  ') if type(contents)==str else ''
          
          CIRCLES[circle2id[circle_name]]={
              'timestamp':timestamp,'circle_name':circle_name,'member_count':member_count,'founding_date':founding_date,'place':place,'contents':contents,'message':message,'contact':contact,'contents_with_no_newline':contents_with_no_newline
            }

    for key,val in CIRCLES.items():
        md_body=f'''---
title: '{val['circle_name']}'
excerpt: ''
date: '{year}-03-29'
iconImage: '/assets/default/icon.png'
coverImage: '/assets/default/cover.jpg'
ogImage:
  url: '/assets/default/cover.jpg'
tags:
  - 'サークル'
---

## サークル情報
- サークル名: {val['circle_name']}
- 部員数: {val['member_count']}
- 創設年月日: {val['founding_date']}
- 活動場所: {val['place']}

{ 
'- 活動内容:'+val['contents_with_no_newline']
}

## メッセージ
{val['message']}

## お問い合わせ先
{val['contact']}

'''
        with open(f'../_posts/circles/{key}.md','w',encoding='utf-8_sig') as f:
           f.write(md_body)

    print('done')
        


if __name__ == '__main__':
  main()