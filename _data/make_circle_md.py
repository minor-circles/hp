# フォームの回答のexcelデータからマークダウンを生成
import pandas as pd
import csv
def main():
    circle2id={}
    with open('circle2id.csv', 'r', encoding='utf-8_sig') as f:
        reader = csv.reader(f)
        for i, row in enumerate(reader):
            if i==0:
                continue
            circle2id[row[0]]=row[1]
    
    CIRCLES={}
    for filename in ['answers/2023.xlsx','answers/2024.xlsx']: 
      df = pd.read_excel(filename)
      for i,(_,line) in enumerate(df.iterrows()):
          timestamp=line['タイムスタンプ']
          circle_name=line['サークル名']
          member_count=line['部員数']
          founding_date=line['創設年月日']
          place=line['活動場所']
          contents=line['活動内容']
          message=line['メッセージ']
          contact=line['連絡先']
          contents_with_no_newline = contents.replace('\n','\n  ')

          if circle_name not in circle2id:
             raise Exception('以下のサークルがcircle2id.csvに登録されていません',circle_name)
          
             

          CIRCLES[circle2id[circle_name]]={
              timestamp:timestamp,circle_name:circle_name,member_count:member_count,founding_date:founding_date,place:place,contents:contents,message:message,contact:contact,contents_with_no_newline:contents_with_no_newline
          }

    for key,val in CIRCLES.items():
        md_body=f'''---
title: '{val.circle_name}'
excerpt: ''
date: '9999-01-01'
iconImage: '/assets/default/icon.png'
coverImage: '/assets/default/cover.jpg'
ogImage:
  url: '/assets/default/cover.jpg'
tags:
  - 'サークル'
---

## サークル情報
- サークル名: {val.circle_name}
- 部員数: {val.member_count}
- 創設年月日: {val.founding_date}
- 活動場所: {val.place}

{ 
'- 活動内容:'+val.contents_with_no_newline if val.contents_with_no_newline else ''
}

## メッセージ
{val.message}

## お問い合わせ先
{val.contact}

'''
        with open(f'../_posts/circles/{key}.md','w',encoding='utf-8_sig') as f:
           f.write(md_body)

    print('done')
        


if __name__ == '__main__':
  main()