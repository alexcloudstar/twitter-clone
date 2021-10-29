import { User } from '../entities/User';
import { MyContext } from '../types/MyContext';
import { Arg, Ctx, Mutation, Query, Resolver } from 'type-graphql';
import { Story } from '../entities/Story';

@Resolver(Story)
export class StoryResolver {
  @Mutation(() => Boolean)
  async createStory(
    @Arg('storyImageUrl', () => String) storyImageUrl: string,
    @Ctx() { req }: MyContext
  ): Promise<boolean> {
    const creator = await User.findOne(req.session.userId);

    try {
      if (creator) {
        await Story.create({
          storyUrl: storyImageUrl,
          creatorId: req.session.userId,
          creatorUsername: creator.username,
        }).save();
        return true;
      }
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
    return false;
  }

  @Mutation(() => Boolean)
  async deleteStory(
    @Arg('storyId', () => String) storyId: string,
    @Ctx() { req }: MyContext
  ): Promise<boolean> {
    const story = await Story.findOne(storyId);

    try {
      if (story?.creatorId !== req.session.userId)
        throw new Error('Not authorized');

      if (!story) throw new Error('Story not found');

      await story.remove();
      return true;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }

  @Query(() => [Story])
  async getStories() {
    try {
      const stories = await Story.find();
      return stories;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }

  @Query(() => Story)
  async getStory(
    @Arg('storyId', () => String) storyId: string
  ): Promise<Story | undefined> {
    try {
      const story = await Story.findOne(storyId);

      if (story) return story;

      throw new Error('Story not found');
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }
}
