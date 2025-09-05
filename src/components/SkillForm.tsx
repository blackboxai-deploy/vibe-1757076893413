'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { addSkillSchema, AddSkillForm, skillCategories, proficiencyLevels } from '@/lib/validation';
import { Skill } from '@/types';

interface SkillFormProps {
  onSubmit: (data: AddSkillForm) => void;
  onCancel?: () => void;
  initialData?: Partial<Skill>;
  isLoading?: boolean;
}

export function SkillForm({ 
  onSubmit, 
  onCancel, 
  initialData,
  isLoading = false 
}: SkillFormProps) {
  const [tags, setTags] = useState<string[]>(initialData?.tags || []);
  const [tagInput, setTagInput] = useState('');
  const [examples, setExamples] = useState<string[]>(initialData?.examples || []);
  const [exampleInput, setExampleInput] = useState('');
  const [resources, setResources] = useState<string[]>(initialData?.learningResources || []);
  const [resourceInput, setResourceInput] = useState('');

  const form = useForm<AddSkillForm>({
    resolver: zodResolver(addSkillSchema),
    defaultValues: {
      title: initialData?.title || '',
      description: initialData?.description || '',
      category: initialData?.category || undefined,
      proficiency: initialData?.proficiency || undefined,
      tags: initialData?.tags || [],
      examples: initialData?.examples || [],
      learningResources: initialData?.learningResources || [],
    },
  });

  const handleSubmit = (data: AddSkillForm) => {
    onSubmit({
      ...data,
      tags,
      examples: examples.filter(e => e.trim()),
      learningResources: resources.filter(r => r.trim()),
    });
  };

  const addTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim()) && tags.length < 10) {
      const newTags = [...tags, tagInput.trim()];
      setTags(newTags);
      form.setValue('tags', newTags);
      setTagInput('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    const newTags = tags.filter(tag => tag !== tagToRemove);
    setTags(newTags);
    form.setValue('tags', newTags);
  };

  const addExample = () => {
    if (exampleInput.trim() && examples.length < 5) {
      const newExamples = [...examples, exampleInput.trim()];
      setExamples(newExamples);
      form.setValue('examples', newExamples);
      setExampleInput('');
    }
  };

  const removeExample = (index: number) => {
    const newExamples = examples.filter((_, i) => i !== index);
    setExamples(newExamples);
    form.setValue('examples', newExamples);
  };

  const addResource = () => {
    if (resourceInput.trim() && resources.length < 5) {
      try {
        new URL(resourceInput.trim()); // Validate URL
        const newResources = [...resources, resourceInput.trim()];
        setResources(newResources);
        form.setValue('learningResources', newResources);
        setResourceInput('');
      } catch {
        // Invalid URL - could show error message
      }
    }
  };

  const removeResource = (index: number) => {
    const newResources = resources.filter((_, i) => i !== index);
    setResources(newResources);
    form.setValue('learningResources', newResources);
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-900">
          {initialData ? 'Edit Skill' : 'Share Your Skill'}
        </CardTitle>
        <p className="text-gray-600">
          Help others discover your expertise and connect with the right opportunities
        </p>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
            {/* Basic Information */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Skill Title *</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="e.g., React Development, Digital Marketing..." 
                        {...field} 
                      />
                    </FormControl>
                    <FormDescription>
                      Be specific and clear about your skill
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {skillCategories.map((category) => (
                            <SelectItem key={category} value={category}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="proficiency"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Proficiency Level *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your level" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {proficiencyLevels.map((level) => (
                            <SelectItem key={level} value={level}>
                              {level}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Description */}
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description *</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe your experience, what you can help with, and any relevant background..."
                      className="min-h-[120px] resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Provide details about your experience and how you can help others
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Tags */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-gray-900">
                Tags * (Help others find your skill)
              </label>
              <div className="flex gap-2">
                <Input
                  placeholder="Add a tag..."
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                  className="flex-1"
                />
                <Button type="button" onClick={addTag} variant="outline">
                  Add
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Badge 
                    key={tag} 
                    variant="secondary" 
                    className="px-3 py-1 cursor-pointer hover:bg-gray-200"
                    onClick={() => removeTag(tag)}
                  >
                    {tag} ×
                  </Badge>
                ))}
              </div>
              <p className="text-sm text-gray-500">
                {tags.length}/10 tags • Click on tags to remove them
              </p>
            </div>

            {/* Examples (Optional) */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-gray-900">
                Examples of Your Work (Optional)
              </label>
              <div className="flex gap-2">
                <Input
                  placeholder="Brief example or project name..."
                  value={exampleInput}
                  onChange={(e) => setExampleInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addExample())}
                  className="flex-1"
                />
                <Button type="button" onClick={addExample} variant="outline">
                  Add
                </Button>
              </div>
              {examples.length > 0 && (
                <ul className="space-y-2">
                  {examples.map((example, index) => (
                    <li key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm">{example}</span>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => removeExample(index)}
                        className="text-red-600 hover:text-red-800"
                      >
                        Remove
                      </Button>
                    </li>
                  ))}
                </ul>
              )}
              <p className="text-sm text-gray-500">
                {examples.length}/5 examples
              </p>
            </div>

            {/* Learning Resources (Optional) */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-gray-900">
                Learning Resources (Optional)
              </label>
              <div className="flex gap-2">
                <Input
                  placeholder="https://example.com/tutorial"
                  value={resourceInput}
                  onChange={(e) => setResourceInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addResource())}
                  className="flex-1"
                />
                <Button type="button" onClick={addResource} variant="outline">
                  Add
                </Button>
              </div>
              {resources.length > 0 && (
                <ul className="space-y-2">
                  {resources.map((resource, index) => (
                    <li key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm truncate">{resource}</span>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => removeResource(index)}
                        className="text-red-600 hover:text-red-800 ml-2"
                      >
                        Remove
                      </Button>
                    </li>
                  ))}
                </ul>
              )}
              <p className="text-sm text-gray-500">
                {resources.length}/5 resources • Share helpful links for learning this skill
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-6 border-t">
              {onCancel && (
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={onCancel}
                  className="flex-1"
                >
                  Cancel
                </Button>
              )}
              <Button 
                type="submit" 
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                disabled={isLoading || tags.length === 0}
              >
                {isLoading ? 'Saving...' : (initialData ? 'Update Skill' : 'Share Skill')}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}