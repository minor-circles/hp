# フォームの回答のexcelデータからマークダウンを生成
import pandas as pd
import csv
import requests 
import os
import shutil

def MakeDownloadURL(drive_url):
    id=drive_url.split('=')[-1]
    return f'https://drive.google.com/uc?id={id}&export=download'

def main():
    circle2id={}
    with open('circle2id.csv', 'r', encoding='utf-8_sig') as f:
        reader = csv.reader(f)
        for i, row in enumerate(reader):
            circle2id[row[0]]=row[1]
    
    CIRCLES={}
    answer_paths=sorted([x for x in os.listdir('answers') if x.endswith('.xlsx')])
    for j,filename_ in enumerate(answer_paths):
      filename=f'answers/{filename_}'
      df = pd.read_excel(filename)
      for i,(_,line) in enumerate(df.iterrows()):
          if 'CHECK' in line:
             if line['CHECK']==False:
              continue
          timestamp=line['タイムスタンプ'] or ''
          circle_name=line['サークル名'] or ''
          member_count=line['部員数'] or ''
          founding_date=line['創設年月日'] or ''
          place=line['活動場所'] or ''
          contents=line['活動内容'] or ''
          message=line['メッセージ'] or ''
          contact=line['連絡先'] or ''
          contents_with_no_newline = contents.replace('\n','\n  ') if type(contents)==str else ''
          icon_url=MakeDownloadURL(line['アイコン画像']) if 'アイコン画像' in line and type(line['アイコン画像'])!=float else ''
          cover_url=MakeDownloadURL(line['活動の様子がわかる画像']) if '活動の様子がわかる画像' in line and type(line['活動の様子がわかる画像'])!=float else ''

          CIRCLES[circle2id[circle_name]]={
              'timestamp':timestamp,'circle_name':circle_name,'member_count':member_count,'founding_date':founding_date,'place':place,'contents':contents,'message':message,'contact':contact,'contents_with_no_newline':contents_with_no_newline
              ,'icon_url':icon_url,'cover_url':cover_url}
    for key,val in CIRCLES.items():
        print(key,val['circle_name'],val['timestamp'])
        year=val['timestamp'].year
        month=val['timestamp'].month
        day=val['timestamp'].day
        # year=timestamp.split(' ')[0].split('/')[2]
        # month=timestamp.split(' ')[0].split('/')[0]
        # day=timestamp.split(' ')[0].split('/')[1]

        os.makedirs(f'../public/assets/{key}', exist_ok=True)
        icon_path=f'../public/assets/{key}/icon.png'
        cover_path=f'../public/assets/{key}/cover.jpg'
        
        if not os.path.exists(icon_path):
          if val['icon_url']=='':
              # val['icon_url']=shutil.copy('../public/assets/default/icon.png',icon_path)
              pass
          else:
            r = requests.get(val['icon_url'], allow_redirects=True)
            open(icon_path, 'wb').write(r.content)
        
        if not os.path.exists(cover_path):
            if val['cover_url']=='':
                pass
                # val['cover_url']=shutil.copy('../public/assets/default/cover.jpg',cover_path)
            else:
              r = requests.get(val['cover_url'], allow_redirects=True)
              open(cover_path, 'wb').write(r.content)

        md_body=f'''---
title: '{val['circle_name']}'
excerpt: ''
date: '{year}-{month}-{day}'
{f"iconImage: '/assets/{key}/icon.png'" if val['icon_url'] else ""}
{f"coverImage: '/assets/{key}/cover.jpg'" if val['cover_url'] else ""}
ogImage:
  url: '/assets/{key}/icon.png'
tags:
  - 'サークル'
  {"- '活動中'" if year>=2024 else ''}
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