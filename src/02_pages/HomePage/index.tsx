import {Tabs, Tab, ContainerPage, Tag} from "../../06_shared/components";
import {Models_Article, Models_TagItem, useGetArticlesQuery} from "../../06_shared/api";
import {ArticlePreview } from "../../04_features";
import {useState} from "react";
import {useGetTagsQuery} from "../../06_shared/api/queries/useGetTagsQuery.ts";
import {Pagination} from "../../06_shared/components/Pagination";

export const HomePage = () => {

    const [offset, setOffset] = useState<number | null>(20);
    const { data} = useGetArticlesQuery({
        offset: offset ? offset : 0,
    });
    console.log(offset);
    const {data: dataTags} = useGetTagsQuery();
    const [currentTag, setCurrentTag] = useState<string | null>(null);

    const setTag = (tag: string) => {
        if (currentTag === tag) {
            setCurrentTag(null);
        } else {
            setCurrentTag(tag)
        }
    }
    return (
        <div className='home-page'>
            <Banner/>
            <ContainerPage>
                <div className="row">
                    <div className="col-md-9">
                        <div className="feed-toggle">
                            <Tabs className="nav nav-pills outline-active">
                                {/*<Tab className="nav-item">
                                    <a className="nav-link" href="">Your Feed</a>
                                </Tab>*/}
                                <Tab className="nav-item">
                                    <a className="nav-link" href="#" onClick={() => setCurrentTag(null)}>Global Feed</a>
                                </Tab>
                                {
                                    currentTag &&
                                    <Tab className='nav-item'>
                                        <a className="nav-link" href="#" onClick={() => setCurrentTag(null)}>
                                            <i className='ion-pound'></i> {currentTag}
                                        </a>
                                    </Tab>
                                }
                            </Tabs>
                        </div>
                        {
                            currentTag ?
                                data?.articles?.filter(({tagList}: Models_Article) => tagList.includes(currentTag)).map((article: Models_Article, id: number) => <ArticlePreview key={id} data={article}/>)
                                :
                                data?.articles?.map((article: Models_Article, id: number) => <ArticlePreview key={id} data={article}/>)
                        }

                        <Pagination
                            totalArticles={data?.articlesCount}
                            isActive={(currentOffset) => currentOffset === offset}
                            currentPage={(offset) => setOffset(offset)}
                        />


                    </div>
                    <div className="col-md-3">
                        <div className="sidebar">
                            <p>Popular Tags</p>
                            <div className="tag-list">
                                {dataTags?.tags?.map((tag: Models_TagItem) => <Tag onClick={() => setTag(tag)}>{tag}</Tag>)}
                            </div>
                        </div>
                    </div>
                </div>
            </ContainerPage>
        </div>
    )
}

const Banner = () => {
    return (
        <div className="banner">
            <div className="container">
                <h1 className="logo-font">conduit</h1>
                <p>A place to share your knowledge.</p>
            </div>
        </div>
    )
}

