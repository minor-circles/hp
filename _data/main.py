import pandas as pd

def main():
    df = pd.read_excel('form_old.xlsx')
    for i,(_,line) in enumerate(df.iterrows()):
        
        circle_name=line['サークル名']
        member_count=line['部員数']
        founding_date=line['創設年月日']
        place=line['活動場所']
        contents=line['活動内容']
        message=line['メッセージ']
        contact=line['連絡先']
        
        contents_with_no_newline = contents.replace('\n','')

        md_body=f'''---
title: '{circle_name}'
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
- サークル名: {circle_name}
- 部員数: {member_count}
- 創設年月日: {founding_date}
- 活動場所: {place}
- 活動内容: {contents}

## メッセージ
{message}

## お問い合わせ先
{contact}

'''
        with open(f'../_posts/circles/{str(i+1).zfill(3)}.md','w',encoding='utf-8_sig') as f:
           f.write(md_body)

    print('done')
        


if __name__ == '__main__':
  main()